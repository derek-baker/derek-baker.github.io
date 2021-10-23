param(
    $workDir = $PSScriptRoot,
    $cleanExcludes = @('assessment_grievance_app_docs', '.git')
)

$initialLocation = Get-Location

try {
    Set-Location $workDir
    npm run build
    Get-ChildItem -Path ../ -Exclude $cleanExcludes | Remove-Item -Force 
    Copy-Item -Recurse -Path ./dist/* -Destination ../ -Container -Verbose 
}
catch {
    $_
}
finally {
    Set-Location -Path $initialLocation
}