import styles from './Blog.module.css'

export default function Blog(){
    return(
        <div className={styles.blogSection}>
<h1>Welcome to our Blog</h1>

<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
  <div className="card">
    <img src="/solution-section/rec4.png" alt=""/>
      <div className="card-body">
        <p className="card-text">Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur. Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur.</p>
        <a href="#" class="card-link">Read More</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="/solution-section/rec2.png" alt=""/>
      <div className="card-body">
        <p className="card-text">Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur. Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur.</p>
        <a href="#" class="card-link">Read More</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <img src="/solution-section/rec3.png" alt=""/>
      <div className="card-body">
        <p className="card-text">Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur. Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur.</p>
        <a href="#" class="card-link">Read More</a>
      </div>
    </div>
  </div>
  </div>
        </div>
    );
}