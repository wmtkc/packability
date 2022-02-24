import { gql, useMutation } from '@apollo/client'

import { CREATE_BOOK_MUTATION } from '@lib/mutations/createBook'

export default function Submit() {
    const [createBook, { loading }] = useMutation(CREATE_BOOK_MUTATION)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const formData = new window.FormData(form)
        const title = formData.get('title')
        const author = formData.get('author')
        form.reset()

        createBook({
            variables: { title, author },
            update: (cache, { data: { createBook } }) => {
                cache.modify({
                    fields: {
                        books(existingBooks = []) {
                            const newBookRef = cache.writeFragment({
                                data: createBook,
                                fragment: gql`
                                    fragment NewBook on books {
                                        id
                                        type
                                    }
                                `,
                            })
                            return [newBookRef, ...existingBooks]
                        },
                    },
                })
            },
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Submit</h1>
            <input placeholder="title" name="title" type="text" required />
            <input placeholder="author" name="author" type="author" required />
            <button type="submit" disabled={loading}>
                Submit
            </button>
            <style jsx>{`
                form {
                    border-bottom: 1px solid #ececec;
                    padding-bottom: 20px;
                    margin-bottom: 20px;
                }
                h1 {
                    font-size: 20px;
                }
                input {
                    display: block;
                    margin-bottom: 10px;
                }
            `}</style>
        </form>
    )
}
