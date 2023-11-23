import { connect, disconnect } from "mongoose"


async function connectToDataBase() {
    try {
        await connect(process.env.MONGODB_URL)

    } catch (error) {
        console.log(error)
        throw new Error("Can not connect to the data base")
    }

}
async function disconnecFromDataBase() {
    try {
        await disconnect()

    } catch (error) {
        console.log(error)
        throw new Error("Could not disconnect from the data base")
    }

}

export { connectToDataBase, disconnecFromDataBase }