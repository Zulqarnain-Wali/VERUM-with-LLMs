@echo off
cd /d "d:\All Projects\stitch_verum_luxury_web3_platform"

REM Sync root index.html to home page
echo Syncing index.html to pages/home...
copy "index.html" "pages\home\index.html" /Y

REM Configure git user
git config user.email "dev@verum.web3"
git config user.name "VERUM Developer"

REM Add all files
git add .

REM Commit
git commit -m "feat: add mobile hamburger menu + shared.css link + modular js to root index.html"

REM Set remote
git remote add origin https://github.com/Zulqarnain-Wali/VERUM-with-LLMs.git 2>nul

REM Rename branch to main
git branch -M main

REM Push
git push -u origin main

pause
