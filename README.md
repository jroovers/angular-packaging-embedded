# angular-packaging-embedded
trying different ways to package an angular projects 

How to build and run:

```sh
./gradlew build
docker build -t embedded-demo .
docker run -p 8080:8080 embedded-demo
```

Navigate to http://localhost:8080 to view demo.