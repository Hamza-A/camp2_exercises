# Joins

1. Write a query in SQL to display the first name, last name, department number, and department name for each employee.

SELECT
employee.first_name,
employee.last_name,
employee.department_id,
department.name
FROM employee
INNER JOIN department on (employee.department_id = department.id);

2. Write a query in SQL to display the first and last name, department, city, and state province for each employee.

SELECT
employee.first_name,
employee.last_name,
department.name,
location.city,
location.state
FROM employee
INNER JOIN department on (employee.department_id = department.id)
INNER JOIN location on (department.location_id = location.id);

3. Write a query in SQL to display the first name, last name, salary, and job grade for all employees.

SELECT
employee.first_name,
employee.last_name,
employee.salary,
job_grade.level
FROM employee
INNER JOIN job_grade ON employee.salary BETWEEN job_grade.lowest_salary AND job_grade.highest_salary;

4. Write a query in SQL to display the first name, last name, department number and department name, for all employees
for departments 8 or 4.

SELECT
employee.first_name,
employee.last_name,
employee.department_id,
department.name
FROM employee
INNER JOIN department ON employee.department_id = department.id
WHERE department.id = '4' OR department.id = '8';

5. Write a query in SQL to display those employees who contain a letter z to their first name and also display their
last name, department, city, and state province.



6. Write a query in SQL to display all departments including those where does not have any employee.

SELECT name FROM department;

7. Write a query in SQL to display the first and last name and salary for those employees who earn less than the
employee earn whose number is 83.

SELECT
first_name,
last_name,
salary
FROM employee
WHERE salary < (SELECT salary FROM employee
WHERE id =83);

8. Write a query in SQL to display the first name of all employees including the first name of their manager.

SELECT
employee.first_name,
manager.first_name
FROM employee AS employee

INNER JOIN employee AS manager ON (employee.manager_id = manager.id);

9. Write a query in SQL to display the department name, city, and state province for each department.

SELECT
name,
location.city,
location.state
FROM department
INNER JOIN location ON (department.location_id = location.id);

10. Write a query in SQL to display the first name, last name, department number and name, for all employees who have or
have not any department.

SELECT
first_name,
last_name,
department_id,
department.name
FROM employee
INNER JOIN department ON (employee.department_id = department.id)
WHERE department_id IS NOT NULL OR department_id IS NULL;

11. Write a query in SQL to display the first name of all employees and the first name of their manager including those
who does not working under any manager.

SELECT
employee.first_name,
manager.first_name
FROM employee AS employee

LEFT JOIN employee AS manager ON (employee.manager_id = manager.id);

12. Write a query in SQL to display the first name, last name, and department number for those employees who work in the
same department as the employee who hold the last name as Taylor.

13. Write a query in SQL to display the job title, department name, full name (first and last name ) of employee, and
starting date for all the jobs which started on or after 1st January, 1993 and ending with on or before 31 August, 1997.

14. Write a query in SQL to display job title, full name (first and last name ) of employee, and the difference between
maximum salary for the job and salary of the employee.

15. Write a query in SQL to display the name of the department, average salary and number of employees working in that
department who got commission.

16. Write a query in SQL to display the full name (first and last name ) of employee, and job title of those employees
who is working in the department which ID is 8.

17. Write a query in SQL to display the name of the country, city, and the departments which are running there.

18. Write a query in SQL to display department name and the full name (first and last name) of the manager.

19. Write a query in SQL to display job title and average salary of employees.

20. Write a query in SQL to display the details of jobs which was done by any of the employees who is presently earning
a salary on and above 12000.

22. Write a query in SQL to display the department name, full name (first and last name) of manager, and their city.

23. Write a query in SQL to display the employee ID, job name, number of days worked in for all those jobs in department
8.

24. Write a query in SQL to display the full name (first and last name), and salary of those employees who working in
any department located in London.

25. Write a query in SQL to display full name(first and last name), job title, starting and ending date of last jobs for
those employees with worked without a commission percentage.

26. Write a query in SQL to display the department name and number of employees in each of the department.

27. Write a query in SQL to display the full name (fisrt and last name ) of employee with ID and name of the country
presently where (s)he is working.
