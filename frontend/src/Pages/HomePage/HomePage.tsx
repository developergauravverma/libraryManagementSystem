interface HomePageProp {
  displayLogin: boolean;
}

const HomePage = (props: HomePageProp): JSX.Element => {
  return (
    <div className="page">
      Home Page
      {props.displayLogin ? <p>Displaying the login form</p> : <></>}
    </div>
  );
};

export default HomePage;
