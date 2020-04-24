# Jest OpenHandle Test

## Goal
This project is to reproduce a probable issue in Jest and show source to trigger error

## Result
Registered timeouts are not detected by the jest "detectOpenHandles" option

## Requirements
* node
* npm

## Test environment
I only tested this on MacOS. I assume the same behaviour in other operating systems.

## Usage
1. Clone repository  ```git clone https://github.com/TarSzator/jest-open-handle-test.git```
1. Go into the folder ```cd jest-open-handle-test```
1. Install dependencies ```npm install```
1. Run test with an open handler ```npm run testFail```
1. Run test with an open handler and detectOpenHandles option ```npm run testFailWithDetect```
1. Run test with work around ```npm run testFailWithWorkaround```
1. Run test with closed handler ```npm run testSuccess```

