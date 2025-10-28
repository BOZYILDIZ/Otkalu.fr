# Guide de Déploiement Vercel - OTK ALU

## Configuration Vercel

Le site est configuré pour un déploiement statique sur Vercel.

### Fichiers de Configuration

- **vercel.json** : Configuration du build et du routing
- **.vercelignore** : Fichiers à ignorer lors du déploiement

### Paramètres de Build

- **Build Command** : `pnpm install && pnpm build`
- **Output Directory** : `dist/public`
- **Install Command** : `pnpm install`

### Déploiement

#### Option 1 : Via l'interface Vercel

1. Connectez-vous à [vercel.com](https://vercel.com)
2. Importez le dépôt GitHub : `https://github.com/BOZYILDIZ/Otkalu.fr`
3. Vercel détectera automatiquement la configuration depuis `vercel.json`
4. Cliquez sur "Deploy"

#### Option 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel --prod
```

### Variables d'Environnement

Les variables suivantes sont automatiquement injectées par le système :

- `VITE_APP_TITLE` : OTK ALU - Métallerie Serrurerie Haguenau
- `VITE_APP_LOGO` : /logo_otkalu.webp

### Domaine Personnalisé

Pour configurer le domaine `otkalu.fr` :

1. Allez dans les paramètres du projet Vercel
2. Section "Domains"
3. Ajoutez `otkalu.fr` et `www.otkalu.fr`
4. Configurez les DNS selon les instructions Vercel

### Vérification du Déploiement

Après le déploiement, vérifiez :

- ✅ La page d'accueil se charge correctement
- ✅ Toutes les pages sont accessibles (Garde-corps, Portail, Escalier, Serrure, Contact)
- ✅ Le routing fonctionne (pas d'erreur 404 sur les pages)
- ✅ Les images se chargent correctement
- ✅ Le formulaire de contact est fonctionnel
- ✅ Le site est responsive sur mobile

### Troubleshooting

**Problème : Erreur 404 sur les pages**
- Solution : Vérifiez que le fichier `vercel.json` contient bien la règle de rewrite pour le routing SPA

**Problème : Images ne se chargent pas**
- Solution : Vérifiez que les images sont bien dans `client/public/`

**Problème : Build échoue**
- Solution : Vérifiez les logs de build Vercel et assurez-vous que toutes les dépendances sont installées

### Support

Pour toute question sur le déploiement, consultez la [documentation Vercel](https://vercel.com/docs).
