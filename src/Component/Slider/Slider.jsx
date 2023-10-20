import React from 'react'

const Slider = () => {
    return (
        <div className='w-full h-96'>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <video autoPlay="2" loop muted src="https://customer-342mt1gy0ibqe0dl.cloudflarestream.com/728fa59bff4866b9aba6290b60ed0a63/dl/default.mp4?p=eyJ0eXBlIjoiZG93bmxvYWRzIiwidmlkZW9JRCI6IjcyOGZhNTliZmY0ODY2YjlhYmE2MjkwYjYwZWQwYTYzIiwib3duZXJJRCI6NzIwMjM3MSwiY3JlYXRvcklEIjoiIiwiZG93bmxvYWRUeXBlIjoiZGVmYXVsdCIsInN0b3JhZ2VQcm92aWRlciI6NCwiZHVyYXRpb25TZWNzIjoxNTkuNzAwMDAwNzYyLCJyZXNvbHV0aW9uIjoiMTA4MCIsInRvdGFsQnl0ZVNpemUiOjQyNzQ3NjUyfQ&s=w5rCncK2w47Chmxhw4J-HgLCq8KVwrzDgcKqOwrCvhnCj0E5AMKkw6FoLAVMYEI"></video>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/img2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/img5.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/img3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    )
}

export default Slider