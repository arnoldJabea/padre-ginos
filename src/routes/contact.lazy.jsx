import { createLazyFileRoute } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import postContact from '../api/postContact'

export const Route = createLazyFileRoute('/contact')({
  component:contactRoute,
})



function contactRoute() {
    const mutation = useMutation({
        mutationFn: function (e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            return postContact(
                formData.get("name"),
                formData.get("email"),
                formData.get("message"),
            );
            
        },
    });

    
    return (
        <div className="contact">
            <h2>Contact</h2>
            {mutation.isSuccess ? (
                <h3>submitted!</h3>
            ) : (
                <form onSubmit={mutation.mutate}>
                    <label>
                        
                        <input type="text" name="name" required  placeholder='Name'/>
                    </label>
                    <label>
                        
                        <input type="email" name="email" required placeholder='Email' />
                    </label>
                    <label>
    
                        <textarea name="message" required placeholder='Message'></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )


}