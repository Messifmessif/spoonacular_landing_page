

const Grid = ({ data }) => {


  const glutenFree =
    data &&
    data.filter((ele) => {
      if (ele.glutenFree) {
        return ele.glutenFree === true;
      } else {
        return "";
      }
    });
  // console.log(glutenFree);
  return (
    <>
      <h2 className="grid_title">Discover our Healthy Food</h2>
      <p className="grid_paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Cupiditate
        tenetur similique explicabo tempore debitis quos animi deleniti,
        aspernatur 
      </p>
      <div
        className="container-grid"
      >
        {glutenFree &&
          glutenFree.map((ele) => (
            <div className="grid-item" key={ele.id}>
              <div className="image-container">
                <img src={ele.image} alt="food_img" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Grid;
