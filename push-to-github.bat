@echo off
cd /d "d:\All Projects\stitch_verum_luxury_web3_platform"

REM Configure git user
git config user.email "dev@verum.web3"
git config user.name "VERUM Developer"

REM Add all files
git add .

REM Commit
git commit -m "feat: fix cursor system, modularize JavaScript across all 7 pages, and add root index.html for GitHub Pages"

REM Set remote
git remote add origin https://github.com/Zulqarnain-Wali/VERUM-with-LLMs.git 2>nul

REM Rename branch to main
git branch -M main

REM Push
git push -u origin main

pause
