n    = 10 'number of files to keep
Set WshShell = CreateObject("WScript.Shell")
strCurDir    = WshShell.CurrentDirectory
fldr = strCurDir + "\del\"
ReDim mostRecent(n-1)

Set fso = CreateObject("Scripting.FileSystemObject")
For Each f In fso.GetFolder(fldr).Files
  If fso.GetExtensionName(f) = "feature" Then
    For i = 0 To n-1
      If IsEmpty(mostRecent(i)) Then
        Set mostRecent(i) = f
        Exit For
      ElseIf f.DateLastModified > mostRecent(i).DateLastModified Then
        For j = n-2 To i Step -1
          If Not IsEmpty(mostRecent(j)) Then Set mostRecent(j+1) = mostRecent(j)
        Next
        Set mostRecent(i) = f
        Exit For
      End If
    Next
  End If
Next

Set lut = CreateObject("Scripting.Dictionary")
For i = 0 To n-1
  If Not IsEmpty(mostRecent(i)) Then lut.Add mostRecent(i).Name, True
Next

For Each f in fso.GetFolder(fldr).Files
  If Not lut.Exists(f.Name) Then f.Delete
Next