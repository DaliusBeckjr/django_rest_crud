import { Link } from 'react-router-dom' 

const NotFound = () => {
    return ( 
        <div>
            <section className="section is-medium">
                <h2 className='is-size-2
                has-text-centered
                has-text-weight-semibold
                mb-4' >
                    Page Not Found
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, repellat corrupti expedita modi quod commodi nam dolor sequi molestiae fuga accusantium iure vel. Obcaecati fugiat perferendis omnis, consequuntur hic cum.</p>

                <p className='has-text-centered mt-4'><Link to="/" className='button is-medium is-rounded'>Homepage</Link> </p>
            </section>
        </div>
    );
}

export default NotFound;