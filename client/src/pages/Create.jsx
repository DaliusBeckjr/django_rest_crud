

import { Form, redirect, useActionData } from "react-router-dom";


export default function Create() {
    const data = useActionData();

    return (
        <section className="section is-medium">
            <Form method="post" action="/movie-create">
                <div className="field">
                    <label className="label">Movie title:</label>
                    <div className="control">
                        <input 
                        type="text"
                        name='title'
                        required
                        className="input" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Movie duration</label>
                    <div className="control">
                        <input
                        type="number"
                        name="duration"
                        required
                        className="input" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Movie description:</label>
                    <div className="control">
                    <textarea
                    name="description"
                    required
                    className="textarea">
                    </textarea>
                    </div>
                </div>
                <div className="field">
                    <label className="label">
                        Movie released Date:
                    </label>
                    <div className="control">
                        <input
                        type="date"
                        name="released_date"
                        required
                        />
                    </div>
                </div>
                <div className="field">
                    <button type="submit" className="button">Submit</button>
                </div>

                { data && data.error && <p>{ data.error }</p> }
            </Form>
        </section>
    )
}

// title, duration, description, released_date

export const createAction = async ({ request }) => {
    console.log(request);

    try {
        const data = await request.formData();

        const submission = {
            title: data.get('title'),
            duration: data.get('duration'),
            description: data.get('description'),
            released_date: data.get('released_date')
        };

        console.log(submission);

    // validations
    // if(submission.description.length < 10){
    //     return {error: 'Description field is required'}
    // }

    
    // send post request
        const response = await fetch('http://localhost:8000/api/movie-add', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submission)
        })

        if(!response.ok) {
            throw Error('Failed to submit data')
        }



        // redirect the user
        return redirect('/')
    } catch (error) {
        console.error('error submitting data', error);
        return { error: 'failed to submit error' }
    }
}