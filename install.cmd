@echo off
set "NODE_DIR=C:\Users\nivesh.bagavatham\OneDrive - OTSI\Desktop\node-v24.15.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"
cd /d "%~dp0"
call "%NODE_DIR%\npm.cmd" install
echo.
echo Done. Run dev.cmd to start the site.
pause
