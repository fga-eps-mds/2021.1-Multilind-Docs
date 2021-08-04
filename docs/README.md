  <h2>MDS/EPS</h2>
  <h3>Sobre o projeto</h3>

  Trata-se de um sistema para mapeamento de línguas indígenas e de português indígena. 
  
  <h3>Membros da equipe</h3>

  <div class="members">
    <div class="member">
      <p>Ingrid Carvalho (MDS)</p>
      <img src="./assets/img/members/Ingrid.jpg" alt="member name">
    </div>
    <div class="member">
      <p>Gabriel Davi (EPS)</p>
      <img src="./assets/img/members/Gabriel.jpeg" alt="member name">
    </div>
    <div class="member">
      <p>Isadora Galvão (MDS)</p>
      <img src="./assets/img/members/Isadora.jpg" alt="member name">
    </div>    
  </div>
  <div class="members">
    <div class="member">
      <p>Hérick Lima (MDS)</p>
      <img src="./assets/img/members/Herick.jpeg" alt="member name">
    </div>
    <div class="member">
      <p>Helder Lourenço (MDS)</p>
      <img src="./assets/img/members/Helder.jpg" alt="member name">
    </div>   
    <div class="member">
      <p>Carlos Rafael (MDS)</p>
      <img src="./assets/img/members/Carlos.jpg" alt="member name">
    </div>
  </div>
  <div class="members">
    <div class="member">
      <p>Micaella Gouveia (EPS)</p>
      <img src="./assets/img/members/Micaella.jpg" alt="member name">
    </div>
    <div class="member">
      <p>Pedro Igor (EPS)</p>
      <img src="./assets/img/members/Pedro.jpeg" alt="member name">
    </div>
    <div class="member">
      <p>Sofia Patrocínio (EPS)</p>
      <img src="./assets/img/members/Sofia.jpg" alt="member name">
    </div>   
  </div>
  <p style="max-width: 900px" align="center"><a href="https://fga.unb.br" target="_blank"><img width="230"src="https://4.bp.blogspot.com/-0aa6fAFnSnA/VzICtBQgciI/AAAAAAAARn4/SxVsQPFNeE0fxkCPVgMWbhd5qIEAYCMbwCLcB/s1600/unb-gama.png"></a></p>
  </p>
</div>

<style>
  .members {
    display: flex; 
    flex-direction: row;
    width: 100%
  }
  .member img {
    position: relative;
    width: 250px;
    opacity: 1;
    border-style: solid;
    border-radius: 200px;
    border-width: 1px; 
    border-color: rgba(0,0,0,0.3);
    z-index: 3;
    transition: opacity 0.5s !important;
  }
  .member img:hover {
    opacity: 0.4;
    z-index: 1;
  }
  .member p:hover  + img {
    opacity: 0.4;
    z-index: 1;
  }
  
 .member {
   display: flex;
   margin: 20px;
   justify-content: center;
  }
 
 .member p {
    position: absolute;
    transform: translate(0, 4.8em);
    z-index: 2;
    color: #fff;
    font-weight: bold;
    font-family: Montserrat;
  }


    @media screen and (max-width: 500px) {
    .member p {
        display: none !important;
    }
    }
 
 
  h2, p {
    font-family: Montserrat !important;
    font-weight: 500;
  }

  h3 {
    font-family: Montserrat !important;
    font-weight: bold;
  }
</style>