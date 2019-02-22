CALL npm run build
CALL gcloud compute scp --recurse D:\xampp\htdocs\nauro-sandbox\build\ instance-1:/var/www/html/nauro.com.br
