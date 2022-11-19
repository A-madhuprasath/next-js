import {useRouter} from "next/router";

const Home = (props) => {
  console.log(props);
  const router = useRouter();
  const navigateToDetailsPage = (id) => {
    router.push(`/home/${id}`)
  }
  return (
    <div>
      {props?.items?.map((x) => (
        <div onClick={() => navigateToDetailsPage(x.id)}>
          <p>{x.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;


export async function getStaticProps() {
  try {
    const items = await fetch('https://jsonplaceholder.typicode.com/posts');
    const allData = await items.json();
    console.log(allData, 'Test');
    return {
      props: {
        items: allData
      },
    }
  } catch (e) {
    console.log(e)
  }
}