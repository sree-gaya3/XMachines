// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAs0YvK-e6yWVF96GHk6rYtTHOusdyuR2o",
  authDomain: "xmachines-5df86.firebaseapp.com",
  projectId: "xmachines-5df86",
  storageBucket: "xmachines-5df86.appspot.com",
  messagingSenderId: "232364332492",
  appId: "1:232364332492:web:4b73e7f87c52fb9e3e7969",
};

// Intializing Firebase
firebase.initializeApp(firebaseConfig);

var storage = firebase.storage();

var firebase = firebase.firestore();

// variable to access database collection
const db = firebase.collection("blogs"); 
const job_db = firebase.collection("careers");

const formdata = firebase.collection("formData");

const getPosts = async () => {
  const snapshot = await db.orderBy("created", "desc").limit(8).get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const getCompanyPosts = async () => {
  const snapshot = await db
    .where("category", "==", "company")
    .orderBy("created", "desc")
    .limit(8)
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const allCompanyPosts = async () => {
  const snapshot = await db
    .where("category", "==", "company")
    .orderBy("created", "desc")
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const getPressPosts = async () => {
  const snapshot = await db
    .where("category", "==", "press")
    .orderBy("created", "desc")
    .limit(8)
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const allPressPosts = async () => {
  const snapshot = await db
    .where("category", "==", "press")
    .orderBy("created", "desc")
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const getTeamPosts = async () => {
  const snapshot = await db
    .where("category", "==", "team")
    .orderBy("created", "desc")
    .limit(8)
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const allTeamPosts = async () => {
  const snapshot = await db
    .where("category", "==", "team")
    .orderBy("created", "desc")
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};

const allJobPosts = async () => {
  const snapshot = await job_db
    .orderBy("created", "desc")
    .get();
  return snapshot.docs.map((snap) => Object.assign({}, { ...snap.data() }));
};


let sortedData = getPosts().then((posts) => {
  return posts;
});

let companyData = getCompanyPosts().then((posts) => {
  return posts;
});

let allCompanyData = allCompanyPosts().then((posts) => {
  return posts;
});

let pressData = getPressPosts().then((posts) => {
  return posts;
});

let allPressData = allPressPosts().then((posts) => {
  return posts;
});

let teamData = getTeamPosts().then((posts) => {
  return posts;
});

let allTeamData = allTeamPosts().then((posts) => {
  return posts;
});

let allJobData = allJobPosts().then((posts) => {
  return posts;
});