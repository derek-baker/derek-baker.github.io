param(
    $workDir = $PSScriptRoot,
    $cleanExcludes = @('assessment_grievance_app_docs', '.git', '.gitignore')
)

$initialLocation = Get-Location

try {
    Set-Location $workDir
    npm run build
    Get-ChildItem -Path ../ -Exclude $cleanExcludes | Remove-Item -Recurse -Force 
    Copy-Item -Recurse -Path ./dist/* -Destination ../ -Container -Verbose 
}
catch {
    $_
}
finally {
    Set-Location -Path $initialLocation
}