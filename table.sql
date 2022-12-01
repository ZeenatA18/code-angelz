-- Create database
create database jifunze_db;
create role codeAngels login password 'codeAngels123';
grant all privileges on database jifunze_db to codeAngels;
-- create tables
create table kids_name (
    id serial not null primary key,
    first_name text not null
);

create table score (
    id serial not null primary key,
    score text not null,
    kids_name_id int not null,
    foreign key (kids_name_id) references kids_name(id)
);
create table levels (
    id serial not null primary key,
    level text not null
);
create table progress(
    id serial not null primary key,
    kids_name_id int not null,
    score_id int not null,
    level_id int not null,
    foreign key (level_id) references levels(id),
    foreign key (kids_name_id) references kids_name(id),
    foreign key (score_id) references score(id)
);
--insert into tables
insert into levels (level) values ('Easy');
insert into levels (level) values ('Medium');
insert into levels (level) values ('Hard');









