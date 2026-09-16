# ClearMind

A web platform that matches people with licensed psychologists. Users fill out an intake questionnaire, browse therapist profiles, and book and pay for a session in one flow.

**Live:** https://clear-mind-eta.vercel.app

## Features

- Therapist directory with profiles, specializations, and availability
- Appointment booking with payment handled in the same step (Razorpay)
- Separate logins for patients, therapists, and admins, each with access limited to their own data
- Therapist dashboard for managing profile, appointments, and clients
- Admin dashboard for managing users and therapists

## Stack

| Layer | Technology |
|---|---|
| Frontend | React / Vite |
| Backend | Node.js / Express |
| Database | MongoDB |
| Auth | JWT |
| Payments | Razorpay |
| Deployment | Vercel / Railway |

## Structure

```
clear-mind/
├── frontend/   # patient app
├── admin/      # admin dashboard
└── backend/    # Express API and MongoDB models
```

## Running locally

```bash
git clone https://github.com/AureaCatena/clear-mind.git
cd clear-mind
```

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend (separate terminal):

```bash
cd frontend
npm install
npm run dev
```

Admin (separate terminal):

```bash
cd admin
npm install
npm run dev
```

### Environment variables

Backend needs a `.env` file:

```
MONGODB_URI=
JWT_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
PORT=
```

## Screenshots

<img width="1042" height="1280" alt="image" src="https://github.com/user-attachments/assets/26ee280d-6ebf-4eb9-96b8-e589e30f98e3" />


## Built by

[Sitora Everman](https://github.com/sittora) and [Sade Yakubova](https://github.com/sade-yakubova)

## License

MIT
