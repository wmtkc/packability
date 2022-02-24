import { useQuery, NetworkStatus } from '@apollo/client'
import ErrorMessage from './ErrorMessage'
import { ALL_BOOKS_QUERY, allBooksQueryVars } from 'src/lib/queries/books'

export default function BookList() {
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
        ALL_BOOKS_QUERY,
        {
            variables: allBooksQueryVars,
            notifyOnNetworkStatusChange: true,
        }
    )

    const loadingMoreBooks = networkStatus === NetworkStatus.fetchMore

    if (error) return <ErrorMessage message="Error loading posts." />
    if (loading && !loadingMoreBooks) return <div>Loading</div>

    const { books, _booksMeta } = data

    const areMoreBooks = books.length < _booksMeta.count

    const loadMoreBooks = () => {
        fetchMore({
            variables: {
                skip: books.length,
            },
        })
        console.log(data)
    }

    return (
        <section>
            <ul>
                {books.map((book, index) => (
                    <li key={book.id}>
                        <div>
                            <span>{index + 1}. </span>
                            <span>{book.author + ' — ' + book.title}</span>
                        </div>
                    </li>
                ))}
            </ul>
            {areMoreBooks && (
                <button
                    onClick={() => loadMoreBooks()}
                    disabled={loadingMoreBooks}
                >
                    {loadingMoreBooks ? 'Loading...' : 'Show More'}
                </button>
            )}
            <style jsx>{`
                section {
                    padding-bottom: 20px;
                }
                li {
                    display: block;
                    margin-bottom: 10px;
                }
                div {
                    align-items: center;
                    display: flex;
                }
                a {
                    font-size: 14px;
                    margin-right: 10px;
                    text-decoration: none;
                    padding-bottom: 0;
                    border: 0;
                }
                span {
                    font-size: 14px;
                    margin-right: 5px;
                }
                ul {
                    margin: 0;
                    padding: 0;
                }
                button:before {
                    align-self: center;
                    border-style: solid;
                    border-width: 6px 4px 0 4px;
                    border-color: #ffffff transparent transparent transparent;
                    content: '';
                    height: 0;
                    margin-right: 5px;
                    width: 0;
                }
            `}</style>
        </section>
    )
}
