# Harnais

Entraînement aux entretiens de Digital Analytics Consultant : 3 rounds de 30 minutes avec 3 managers simulés (technique, CRO et analyse, conseil), feedback sur chaque réponse, progression, modules.

## Ouvrir l'app
- En ligne (téléphone compris) : l'adresse GitHub Pages du dépôt, en HTTPS, donc le micro fonctionne.
- En local : double-clic sur `index.html`. Si le micro ou l'API sont bloqués, lance `python -m http.server 8000` dans ce dossier puis ouvre `http://localhost:8000`.

## Clé Gemini (facultative)
1. Crée une clé sur Google AI Studio (aistudio.google.com, rubrique « Get API key »).
2. Accueil, engrenage, champ « Clé API », puis « Tester la clé ». La liste des modèles se remplit.
3. Le test fait un vrai appel et choisit seul le meilleur modèle Flash autorisé par ta clé (si un modèle répond 404, l'app passe au suivant).

Sous chaque réponse notée moins de 4, une « Réponse modèle » rédigée par Gemini (trame locale sans clé), sans chiffre inventé. Sans clé, tout marche en mode local : questions de la banque, évaluation par règles (mention « évaluation locale (règles) »).

## Limites du plan gratuit
Quotas par minute et par jour (variables selon le modèle). L'app envoie une seule requête par réponse, espacée d'au moins 6 secondes, et affiche le compteur du jour dans les réglages. En cas de quota atteint (429), elle passe en mode local pendant le délai indiqué par Google.

## Confidentialité
Les données restent dans le navigateur (localStorage, préfixe `harnais.v1.`). La clé n'est jamais dans le code ni exportée par défaut. Avec une clé, tes réponses (et tes fiches projets, option désactivable) partent vers Google AI Studio : pas de chiffres confidentiels.

## Dépannage du micro
- Chrome ou Edge uniquement (Firefox : mode écrit). Chrome envoie l'audio à Google pour la reconnaissance.
- « Micro refusé » : clique sur l'icône à gauche de l'adresse et autorise le micro.
- Sur PC : maintiens la barre espace pour parler. Sur téléphone : maintiens le bouton micro, ou touche une fois pour démarrer puis une fois pour arrêter.

## Choix et limites
Phases pilotées par le temps réel. Débit en mots par minute mesuré seulement à l'oral. Une ligne de l'atelier contient des erreurs volontaires. Le mode test `?vitesse=60` accélère les chronos. Non livré : analyse audio avec MediaRecorder (P3 optionnel).
