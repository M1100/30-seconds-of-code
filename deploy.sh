npm i
npm run build
aws s3 rm --recursive s3://30-seconds/
aws s3 cp ./dist s3://30-seconds/ --recursive
