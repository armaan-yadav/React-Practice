import shoes from "../assets/shoes.png";
import PrimaryButton from "../utils/PrimaryButton";
const Body = () => {
  return (
    <>
      <div className="px-[10rem]  h-[90vh]  flex py-[1rem] items-center">
        <div className="text-left w-[50%] flex flex-col gap-3 ">
          <div className="mb-[1rem]">
            <span>
              <h1 className="text-7xl font-[800]">YOUR FEET </h1>
            </span>
            <span>
              <h1 className="text-7xl font-[800]">DESERVES</h1>
            </span>
            <span>
              <h1 className="text-7xl font-[800]">THE BEST</h1>
            </span>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In fuga
            saepe earum consequatur non dolorem at reiciendis possimus
            laudantium minima.
          </p>
          <div className="flex gap-4">
            <PrimaryButton name={"Shop Now"} />
            <button className="border border-black px-[1.5rem]  py-[.3rem] hover:border-red-700 hover:text-red-700">
              Category
            </button>
          </div>
          <div>
            <p className="text-gray-500">Also available on</p>
            <div className="flex  items-center left gap-3">
              <a target="_blank" href="https://www.amazon.in/">
                <img
                  className="h-[2rem]"
                  src="https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Emblem.png"
                  alt=""
                />
              </a>
              <a target="_blank" href="https://flipkart.com">
                <img
                  className="h-[2rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/1200px-Amazon_icon.svg.png"
                  alt=""
                />
              </a>

              <a target="_blank" href="https://myntra.com">
                <img
                  className="h-[2rem]"
                  src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="img w-[50%] scale-[1.2] -rotate-[45deg]">
          <img src={shoes} alt="" />
        </div>
      </div>
    </>
  );
};
export default Body;
