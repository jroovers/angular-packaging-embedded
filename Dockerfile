FROM openjdk:17-slim

ENV TZ=Europe/Amsterdam

# Update the packages
RUN apt-get update && apt-get upgrade -y

# Copy fat jar
ADD build/libs/embedded.jar /

# Tell docker that all future commandsóshould run as NON root (OpenShift will run as arbitrary user)
USER 10001

WORKDIR /
ENTRYPOINT ["java", "-jar", "/embedded.jar"]
