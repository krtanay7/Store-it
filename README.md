# Store It

Store It is a storage management application built with React and Firebase. Users can securely store, retrieve, and manage digital assets with real-time synchronization and a simple, intuitive interface.

**Live demo:** https://store-it-secure.vercel.app/sign-in

## Key Features
- Secure user authentication (Firebase Auth)
- Real-time synchronization of assets (Cloud Firestore / Realtime Database)
- File uploads and thumbnail previews (Firebase Storage)
- Responsive, accessible UI built with Next.js and Tailwind CSS
- Search, sort, and organize items with ease

## Tech Stack
- Frontend: Next.js (React) + TypeScript
- Styling: Tailwind CSS
- Backend / Services: Firebase (Auth, Firestore, Storage)

## Getting Started
These instructions will get a copy of the project running on your local machine for development and testing.

### Prerequisites
- Node.js (16+ recommended)
- npm or pnpm
- A Firebase project and credentials

### Install
`
# install dependencies
npm install
# or
pnpm install
`

### Environment
Create a .env.local file in the project root and add your Firebase configuration (example names):

`
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
`

Keep these values secure and do not commit them to version control.

### Run locally
`
npm run dev
# or
pnpm dev
`

Open http://localhost:3000 to view the app.

## Build
`
npm run build
npm run start
`

## Deployment
This project is ready for deployment to Vercel, Netlify, or any platform that supports Next.js. Ensure your environment variables are configured in the hosting provider.

## Contributing
- Fork the repository and open a pull request.
- Keep changes focused and include tests for new behavior when possible.

## License
This project is provided under the MIT License.

## Contact
For issues or questions, open an issue or reach out to the maintainers.

---

If you'd like, I can also:
- Add a short screenshot or demo GIF section
- Add example Firebase rules or a sample .env.local.example
- Create a CONTRIBUTING.md with contribution guidelines

=
