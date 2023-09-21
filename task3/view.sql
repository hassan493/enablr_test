/* 
Assuming that the summary is differentiated by status and date.
I have grouped the work by date and status both which will allow usage of
where clause in the select statement to filter out.
*/
CREATE VIEW provider_work_summary AS
SELECT 
    provider_id,
    date,
    status,
    SUM(duration) AS total_duration
FROM 
    work_entries
GROUP BY 
    provider_id, date, status;

/* Usage example*/

SELECT * 
FROM provider_work_summary
WHERE status = 'APPROVED'