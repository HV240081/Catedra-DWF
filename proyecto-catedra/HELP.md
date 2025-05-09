# Read Me First
The following was discovered as part of building this project:

* The original package name 'sv.edu.udb.proyecto-catedra' is invalid and this project uses 'sv.edu.udb.proyecto_catedra' instead.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.3.11/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.3.11/maven-plugin/build-image.html)
* [Spring Integration JPA Module Reference Guide](https://docs.spring.io/spring-integration/reference/jpa.html)
* [Spring Integration Test Module Reference Guide](https://docs.spring.io/spring-integration/reference/testing.html)
* [Spring Integration Apache Kafka Module Reference Guide](https://docs.spring.io/spring-integration/reference/kafka.html)
* [Spring Integration Security Module Reference Guide](https://docs.spring.io/spring-integration/reference/security.html)
* [Spring Integration HTTP Module Reference Guide](https://docs.spring.io/spring-integration/reference/http.html)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/3.3.11/reference/using/devtools.html)
* [Spring Web](https://docs.spring.io/spring-boot/3.3.11/reference/web/servlet.html)
* [Spring Batch](https://docs.spring.io/spring-boot/3.3.11/how-to/batch.html)
* [Spring Security](https://docs.spring.io/spring-boot/3.3.11/reference/web/spring-security.html)
* [Spring Data JPA](https://docs.spring.io/spring-boot/3.3.11/reference/data/sql.html#data.sql.jpa-and-spring-data)
* [Config Client](https://docs.spring.io/spring-cloud-config/reference/client.html)
* [Spring Integration](https://docs.spring.io/spring-boot/3.3.11/reference/messaging/spring-integration.html)
* [Spring for Apache Kafka](https://docs.spring.io/spring-boot/3.3.11/reference/messaging/kafka.html)

### Guides
The following guides illustrate how to use some features concretely:

* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Creating a Batch Service](https://spring.io/guides/gs/batch-processing/)
* [Securing a Web Application](https://spring.io/guides/gs/securing-web/)
* [Spring Boot and OAuth2](https://spring.io/guides/tutorials/spring-boot-oauth2/)
* [Authenticating a User with LDAP](https://spring.io/guides/gs/authenticating-ldap/)
* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Integrating Data](https://spring.io/guides/gs/integration/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.

