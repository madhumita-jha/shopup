import React from 'react';
import './styles.css';
const Home = () => {
    return (
        <div className='homepg'>
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://sm.ign.com/t/ign_za/lists/h/how-to-rea/how-to-read-the-dune-books-in-chronological-order_1jyy.1280.jpg" class="d-block w-100" alt="Carousel 1"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.ctfassets.net/usf1vwtuqyxm/ZYMcLjGl6Gh3FicESY9q3/dcc6bce1f3d9c52fd2fce3bc1098682a/Harry-Potter-2023-Paperbacks-Assets_Purple.jpg?w=1200&fit=fill&f=top" class="d-block w-100" alt="Carousel 2" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.hebronhawkeye.com/wp-content/uploads/2023/04/691BAFAE-A86D-4C1B-9A31-A3EDFECE784E-900x506.png" class="d-block w-100" alt="Carousel 3"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
};

export default Home;