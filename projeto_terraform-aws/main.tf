provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"

  tags = {
    Name = "HelloWorld"
  }

    user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              
              # Instalar Python 3 e dependências
              sudo yum install -y python3 python3-pip

              # Instalar PostgreSQL
              sudo amazon-linux-extras install postgresql11
              sudo yum install -y postgresql-server postgresql-devel
              sudo /usr/bin/postgresql-setup --initdb
              sudo systemctl start postgresql
              sudo systemctl enable postgresql

              # Instalar Sentry
              sudo yum install -y gcc libffi-devel python3-devel openssl-devel
              sudo pip3 install sentry-sdk

              # Configurar e iniciar sua aplicação Python com gunicorn
              sudo pip3 install gunicorn
              mkdir /app
              cd /app
              echo "print('Minha aplicação Python está funcionando!')" > app.py
              gunicorn -b 0.0.0.0:8000 app:app &

              EOF
}

resource "aws_s3_bucket" "example" {
  bucket = var.bucket_name
}


