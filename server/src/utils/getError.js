export default function getError(error) {
    switch (error.name) {
        case 'ValidationError':
            return Object.values(error.errors)[0]?.message;
        default:
            return error.message;
    }
}