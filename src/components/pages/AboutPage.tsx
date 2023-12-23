import text_json from "../../json_files/about_text.json"


function AboutPage() {


  return (
    <div className="">
      <div className="m-4 grid grid-rows-1 grid-cols-2">
        <div className=" flex justify-center m-auto text-5xl underline font-aloha">
          Wayne Wilcox
        </div>
        <div className="flex justify-center m-auto">
          <img className=" size-2/3 w-auto" src="./images/silly_cat.jpg" alt="" />
        </div>
        <div>
          {text_json.text}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
