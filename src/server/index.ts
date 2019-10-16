import * as express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import * as corsApp from 'cors';
import { Application } from 'express';
import Api from '../routes/Api';
import Routes from './Routes';
import Locals from './Locals';
import Kernel from './Kernel';
import Http from './Http';
import Express from './Express';
import CORS from './CORS';
import App from './App';

export { express, Application, Routes, Locals, Kernel, Http, Express, CORS, App, dotenv, Api, bodyParser, corsApp };
