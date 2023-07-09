import SectionContainer from "./SectionContainer";
const socialIcons = [  
  {
    id: 0,
    iconName: "icon-linkedin-squared",
    link: "https://www.linkedin.com/in/derek-baker-270a9812b/",
  },
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full min-h-[100vh] clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center">
            <div
              className="avatar min-w-[300px] min-h-[300px] relative rounded-full"
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <div
                className="image absolute inset-0 bg-no-repeat bg-center bg-cover"
                data-img-url="assets/img/slider/1.jpg"
              />
            </div>
            <div className="details ml-[80px]">
              <h3 className="name text-[55px] font-extrabold uppercase mb-[14px]">
                Derek <span>Baker</span>
              </h3>
              <p className="job font-montserrat font-medium max-w-[450px] mb-[25px]">
                This is my personal site. I used a template.
              </p>
              
              <a href="https://stackexchange.com/users/10030726/derekbaker783"><img src="https://stackexchange.com/users/flair/10030726.png" width="208" height="58" alt="profile for derekbaker783 on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for derekbaker783 on Stack Exchange, a network of free, community-driven Q&amp;A sites" /></a>
              
              <div className="social w-full float-left">
                <ul className="m-0 list-none">
                  {socialIcons.map((item) => (
                    <li className="mr-[8px] inline-block" key={item.id}>
                      <a
                        className="text-black text-[20px] transition-all duration-300 hover:text-black"
                        href={item.link}
                        target="_blank"
                      >
                        <i className={item.iconName} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
