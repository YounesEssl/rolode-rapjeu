import Link from "next/link";
import { Box, Button, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Bienvenue sur Rolode RapJeu
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Link href="/auth/signup" passHref>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            S'inscrire
          </Button>
        </Link>
        <Link href="/auth/signin" passHref>
          <Button variant="outlined" color="primary">
            Se connecter
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
