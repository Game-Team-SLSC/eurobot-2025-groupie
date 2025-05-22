FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install 
RUN apt-get update && apt-get install -y socat

COPY . .

EXPOSE 7000

# Create a startup script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Use the script as entrypoint
CMD ["/start.sh"]