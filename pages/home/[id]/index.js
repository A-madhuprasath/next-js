const Details = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props?.items?.body}</p>
    </div>
  );
}

export default Details;

export async function getStaticPaths() {
  const items = await fetch('https://jsonplaceholder.typicode.com/posts');
  const allData = await items.json();
  const paths = allData?.map((x) => {
    return{
      params:{
        id: `${x.id}`
      }
    }
  })
  return {
    paths, fallback: false
  }
}

export async function getStaticProps(context) {
  const {params} = context
  try {
    const items = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
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