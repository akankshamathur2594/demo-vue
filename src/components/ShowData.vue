<template>
    <div class = "showDiv">
    <div class="container my-5">
        <div class="text-center">
            <h1 class="display-4 text-center mb-3">Making API calls in Vue</h1>
            <div class="center">
                <div class="row">
                    <div class="col-lg-6">
                        <button v-on:click="onGet" class="btn btn-primary my-3">GET</button>
                        <button v-on:click="clearResponse" class="btn btn-primary my-5">Clear Response</button>
                        <!-- EVENT HANDELING -->
                    </div>
                    <!-- POST -->
                    <div class="col-lg-6">
                        <h3>Post</h3>
                        <form @submit.prevent="onPost">
                        <div class="form-group">
                                <label>id : </label>
                                <input type="text" class="form-control" v-model="id" required/>
                            </div>
                            <div class="form-group">
                                <label>userId: </label>
                                <input type="text" class="form-control" v-model="userId" required/>
                            </div>
                            <div class="form-group">
                                <label>Title : </label>
                                <input type="text" class="form-control" v-model="title" required/>
                            </div>
                            <div class="form-group">
                                <label>description : </label>
                                <textarea class="form-control" v-model="body"></textarea>
                            </div>
                            <div class="mt-3">
                                <button type="submit" class="btn btn-primary">
                                    Create Post
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
            </div>
        </div>
        <hr />
        <div>
            {{ res }}
        </div>
    </div>

    </div>

</template>

<script>

import axios from "axios";
export default {
    
    data() {
        return {
            res: [],
        };
    },
    name: "ShowData",
    methods: {
        // The get method called by the function
        onGet() {
            axios
                //.get("https://mocki.io/v1/61199f2b-3fa6-42ed-bb3d-c4b43a00ed2e")
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => {
                    console.log(response);
                    // using stringify to beautify the output
                    this.res = JSON.stringify(response.data);
                })
                .catch((errors) => {
                    console.log(errors); // Errors
                });
        },

        clearResponse(){
            console.log("CLEAR Response");
            this.res = "";
        },

        onPost() {
    axios
        .post('https://jsonplaceholder.typicode.com/posts', {
            id: this.id,
            userId : this.userId,
            title: this.title,
            body: this.body,
        })
        .then(response => {
            console.log(response)
            this.res = "Status " + response.status + " Post created";
        })
        .catch(err => console.error(err));
        },
    },
};

</script>

<style>
</style>
