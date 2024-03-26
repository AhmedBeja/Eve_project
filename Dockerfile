# Utilisation de l'image de base Node.js pour la partie Angular
FROM node:14 as angular-build

# Définir le répertoire de travail pour la partie Angular
WORKDIR /app/angular

# Copier les fichiers de configuration de l'application Angular
COPY angular.json ./
COPY package.json ./
COPY package-lock.json ./

# Installer les dépendances Angular
RUN npm install

# Copier le contenu de l'application Angular
COPY src ./src

# Construire l'application Angular pour la production
RUN npm run build -- --output-path=./dist

# Utilisation de l'image de base Python pour la partie Django
FROM python:3.12

# Définir l'environnement de travail pour la partie Django
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Définir le répertoire de travail pour la partie Django
WORKDIR /app/django

# Copier le fichier requirements.txt pour installer les dépendances Python
COPY django/requirements.txt ./

# Installer les dépendances Python
RUN pip install --no-cache-dir -r requirements.txt

# Copier le contenu de l'application Django
COPY django/ ./

# Copier les fichiers statiques Angular construits à partir de l'étape précédente
COPY --from=angular-build /app/angular/dist ./static

# Exposer le port 8000 sur lequel Gunicorn va écouter
EXPOSE 8000

# Lancer Gunicorn pour servir l'application Django
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "Eve_project.wsgi:application"]

COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]
