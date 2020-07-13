<template>
  <div class="home">
    <div class="header-text">Contact List</div>
    <div class="search-container">
      <img src="../assets/search.png" alt="Search" />
      <input placeholder="Cari ..." :value="keyword" />
    </div>
    <table style="width:100%">
      <thead>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>action</th>
      </thead>
      <tbody v-if="isLoading">
        <tr class="loading">
          <td colspan="4">Loading</td>
        </tr>
      </tbody>
      <tbody v-if="!isLoading && users.length <= 0">
        <tr class="loading">
          <td colspan="4">No Data</td>
        </tr>
      </tbody>
      <tbody v-if="!isLoading && users.length > 0">
        <tr class="user" v-for="(user, index) in users" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="userSelected(user)">edit</button>
          </td>
        </tr>
      </tbody>
    </table>

    <v-dialog v-model="isOpen" width="500">
      <div class="modal">
        <div class="modal-header">
          <div class="title">Detail user</div>
          <button class="btn-close" @click="close()">
            <img src="../assets/close.png" alt="Close" />
          </button>
        </div>
        <div class="modal-body">
          <div class="image-container">
            <img src="../assets/user.png" alt="User" />
          </div>
          <div>
            <div>Nama</div>
            <div>: {{ user.name }}</div>
          </div>
          <div>
            <div>Email</div>
            <div>: {{ user.email }}</div>
          </div>
          <div>
            <div>Phone</div>
            <div>: {{ user.phone }}</div>
          </div>
          <div>
            <div>Website</div>
            <div>: {{ user.website }}</div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script lang="ts" src="./home.ts" />

<style lang="scss">
.header-text {
  font-size: 24px;
  font-weight: bold;
}

.home {
  position: relative;
  padding-left: 200px;
  padding-right: 200px;
}

.search-container {
  display: flex;
  flex-direction: row;
  border-color: black;
  border-width: 1px;
  border-radius: 20px;
  border-style: solid;
  padding: 5px;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.search-container input {
  border-width: 0px;
  margin-left: 10px;
  flex: 1;
}

.search-container img {
  width: 25px;
  height: 15px;
  padding-right: 5px;
  padding-left: 5px;
}

table {
  border-style: solid;
  border-width: 1px;
  border-color: #95afc0;
  border-radius: 8px;
}

table button {
  background-color: #f9ca24;
  border-radius: 4px;
  padding: 5px 10px 5px 10px;
  border-style: none;
}

table button:hover {
  background-color: #f0932b;
  border-radius: 4px;
  color: white;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
}

thead th {
  text-align: left;
}

tbody th {
  background-color: red;
  cursor: pointer;
}

.loading {
  text-align: center;
}

.loading td {
  padding-top: 50px;
  padding-bottom: 50px;
}

.user {
  border-color: black;
  border-width: 0.5px;
  border-style: solid;
}
.user:hover {
  background-color: #dff9fb;
}

.modal {
  background-color: white;
  width: 400px;
  height: 400px;
  padding: 20px;
}

.modal-header {
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
}

.modal-body div {
  display: flex;
  flex-direction: row;
}

.modal-body div div:nth-child(1) {
  flex: 1;
}

.modal-body div div:nth-child(2) {
  flex: 3;
}

.btn-close {
  padding: 10px;
  cursor: pointer;
  background-color: white;
  border-style: none;
}

.btn-close:active {
  background-color: #dff9fb;
  border-radius: 4px;
}

.btn-close img {
  height: 20px;
}

.image-container {
  align-self: center;
}
.image-container img {
  width: 100px;
  height: 190px;
  padding-top: 50px;
  padding-bottom: 50px;
}

.title {
  font-size: 20px;
  flex: 1;
  text-align: center;
}
</style>
