


const Card = () => {
   
    return (
        <div>
          <div className="grid lg:grid-cols-3 gap-8 w-[85%] mx-auto md:grid-cols-2 grid-cols-1">
          <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://avatars.slack-edge.com/2020-05-09/1112549471909_7543dde099089941d3c3_512.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://simplepoll.rocks/static/main/images/new-landing-page/simplepoll-social-card.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src="https://i.ytimg.com/vi/oW8DT6o4GBM/maxresdefault.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          </div>
        </div>
    );
};

export default Card;