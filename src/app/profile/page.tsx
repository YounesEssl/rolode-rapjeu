"use client";

import { useSession } from "next-auth/react";
import { Container, Typography } from "@mui/material";
import { withAuth } from "../_components/withAuth";

function ProfilePage() {
  const { data: session } = useSession();

  return (
    <Container>
      <Typography variant="h4">Profil</Typography>
      <Typography>Nom: {session?.user?.name}</Typography>
      <Typography>Email: {session?.user?.email}</Typography>
    </Container>
  );
}

export default withAuth(ProfilePage);
