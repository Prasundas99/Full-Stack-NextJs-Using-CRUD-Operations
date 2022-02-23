import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdb-react-ui-kit";
import Link from "next/link";
const axios = require("axios").default;

const index = ({ heros }) => {
  return (
    <div className="container">
      <h1 className="diplay-2">Superhero Identity manager</h1>
      <div>
        {heros.map((hero) => {
          return (
            <MDBCard
              className="border boder-2 my-2"
              style={{ maxWidth: "22rem" }}
              key={hero._id}
            >
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>Reveal Identity</MDBCardText>
                <Link href={`/${hero._id}`}>
                  <MDBBtn className="mx-2">View Hero</MDBBtn>
                </Link>
                <Link href={`/${hero._id}/edit`}>
                  <MDBBtn>Edit Hero</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await axios("http://localhost:3000/api/hero");
  // console.log(res.data.hero);
  const { hero } = res.data;
  //console.log(hero);
  return {
    props: { heros: hero }
  };
}

export default index;
