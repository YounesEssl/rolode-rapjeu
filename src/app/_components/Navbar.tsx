"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            <Button color="inherit">Rolode RapJeu</Button>
          </Link>
        </Typography>
        {status === "loading" ? (
          <CircularProgress color="inherit" size={24} />
        ) : status === "authenticated" ? (
          <>
            <Box sx={{ mr: 2 }}>
              <Typography variant="body1">
                Bonjour, {session.user?.name}
              </Typography>
            </Box>
            <Link href="/profile" passHref>
              <Button color="inherit">Profil</Button>
            </Link>
            <Button color="inherit" onClick={() => signOut()}>
              Déconnexion
            </Button>
          </>
        ) : (
          <>
            <Link href="/auth/signin" passHref>
              <Button color="inherit">Connexion</Button>
            </Link>
            <Link href="/auth/signup" passHref>
              <Button color="inherit">Inscription</Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
