import React from "react";
import { Grid } from "@mui/material"
const Layout2 = function () {
    return <Grid container margin={.1}>

        <Grid container item sx={{ lineHeight: 2.5 }}>
            <Grid item xs={2} sx={{ background: "#ccc", margin: "0 2px" }}>logo</Grid>
            <Grid item xs={5} sx={{ background: "#ccc", margin: "0 2px", textAlign: "center" }}>pesquisar</Grid>
            <Grid item xs={4} sx={{ background: "#ccc", margin: "0 2px", textAlign: "end" }}>fazer login</Grid>
        </Grid>

        <Grid container item sx={{ lineHeight: 2, marginTop: 2, marginLeft: 2.1 }}>
            <Grid item width={70} sx={{ background: "#1A1A1A", color: "#fff", textAlign: "center", borderRadius: "8px" }}>Tudo</Grid>
            <Grid item width={70} sx={{background:"#C7C7C7",color:"#4D4D4D",textAlign:"center", borderRadius:"8px",marginLeft:"5px" }}>Musica</Grid>
            <Grid item width={70} sx={{background:"#C7C7C7",color:"#4D4D4D",textAlign:"center", borderRadius:"8px",marginLeft:"5px"}}>Ao vivo</Grid>
            <Grid item width={70} sx={{background:"#C7C7C7",color:"#4D4D4D",textAlign:"center", borderRadius:"8px",marginLeft:"5px"}}>Jogos</Grid>
            <Grid item width={130} sx={{background:"#C7C7C7",color:"#4D4D4D",textAlign:"center", borderRadius:"8px",marginLeft:"5px"}}>Musica sertaneja</Grid>
            <Grid item width={75} sx={{background:"#C7C7C7",color:"#4D4D4D",textAlign:"center",borderRadius:"8px",marginLeft:"5px"}}>Animação</Grid>
            <Grid item width={80} sx={{background:"#C7C7C7",color:"#4D4D4D",textAlign:"center",borderRadius:"8px",marginLeft:"5px"}}>Dublagens</Grid>
        </Grid>
        </Grid>
}
export default Layout2;