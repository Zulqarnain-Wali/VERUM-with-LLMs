@echo off
cd /d "d:\All Projects\stitch_verum_luxury_web3_platform"

REM Copy home page to root (GitHub Pages needs index.html at root)
echo Copying home page to root...
copy "pages\home\index.html" "index.html" /Y

REM Configure git user
git config user.email "dev@verum.web3"
git config user.name "VERUM Developer"

REM Add all files
git add .

REM Commit
git commit -m "feat: fix cursor, modularize JS, and move home page to root for GitHub Pages"

REM Set remote
git remote add origin https://github.com/Zulqarnain-Wali/VERUM-with-LLMs.git 2>nul

REM Rename branch to main
git branch -M main

REM Push
git push -u origin main

pause
