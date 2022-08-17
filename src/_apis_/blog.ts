import { random } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { paramCase } from 'change-case';
// utils
import mock from './mock';
// utils
import mockData from '../utils/mock-data';
// @types
import { Post } from '../@types/blog';

// import { softwareDevelopment, growBuissness } from 'utils/mock-data/postBody';
// import { postBodies } from 'utils/mock-data/postBody';
// ----------------------------------------------------------------------

// Made with React Quill
const POST_BODY = `
${
/*<h1>Heading H1</h1><br/>
<h2>Heading H2</h2><br/>
<h3>Heading H3</h3><br/>
<h4>Heading H4</h4><br/>
<h5>Heading H5</h5><br/>
<h6>Heading H6</h6><br/>*/
``
}
<hr>
<h3>The Future of the Software Development Industry</h3><br/>
<p>As the market for software development grows, so does the need for change. Technological trends have always shaped the business landscape and determines the different modes of working as well as the nature of the work itself. 
Recently, there has been a radical shift in the areas of remote working, and these have outlined new news for the software development industry. To find what exactly these changes in technology mean in terms of the future, keep on reading our article!
</p>
${
// <br/>
// <p><strong>This is strong text.</strong></p>
// `<p><u>This is underline text</u><span class=\"ql-cursor\">﻿</span></p>`
// <p><em>This is italic text</em></p>
``
}
${
  /* eslint-disable-next-line */
  ``
}

<hr>
<ol><h4><li>The Emergence of Artificial Intelligence </li></h4><br/>
<p>Very shortly, Artificial Intelligence will govern most activities. Smart machines will replace humanistic jobs and streamline all processes from industrial manufacturing to everyday businesses. 
In the software development landscape, AI will be integrated into existing technologies more readily, resulting in more efficient processes and more amplified digital experiences. 
AI will also go hand in hand with cloud computing and Kubernetes, allowing software developers to run applications on multi-cloud systems. This will considerably scale up existing systems and service infrastructure. 
</p>
<hr>
<h4><li>Machine Learning</li></h4>
<p>Machine learning is currently the highest funded application in the world, standing at a whopping $28 billion. In the future, it will be found everywhere from risk management to automation processes. In 2022, Generative AI has taken the world by storm as one of the readily adopted machine learning methods. 
This is being used to assist software development procedures already and will account for approximately 10% of all the data that is being produced in the next 3 years.
</p>
<hr>
<h4><li>No-code platforms </li></h4>
<p>No-code platforms are essentially pre-built blocks that can easily be dragged and dropped to help in the rapid development of web and mobile apps. This helps because it can be done by both professional software developers as well as people that are not affiliated with IT skills.
Although this provides a speedy visual environment, there are future concerns about the flexibility, security, and scalability of these no-code platforms. They will considerably lower the barriers to entry for newcomers in the tech arena and will be readily adopted shortly. 
</p>
<hr>
<h4><li>Block Chain</li></h4>
<p>You must have heard about BlockChain by now. It is a type of technology that assists in creating a decentralized and secure database of all the transactions that take place within a business in sequential order.
The technology has helped ensure that all data is secure and transparent and has vastly improved user trust regarding online transactions. In the future, Blockchain will see to it that cryptocurrency generation increases with the help of end-user software applications. 
This internal currency will be highly coveted by all businesses and will transform the nature of transactions as a whole. More currencies like Bitcoin will emerge and investors will engage highly with these new technological changes. 
</p>
<hr>
<h4><li>Cloud Centralization </li></h4>
<p>Now, another highly anticipated adoption in the future of Software Development is that of increased Cloud Centralization. As we near the future, more and more data is being produced and the need to store it is enhancing. 
This has led users toward cloud storage, and the emergence of cloud provider companies such as Amazon, and Google. The future thus marks an even higher increase in these companies providing cloud Centralization and migration services. 
What this means for the Software Development Industry 
Because of these anticipated changes in the technological landscape, the software development industry will face many additional challenges. 
</p>
<ul><h5><li>Cybersecurity</h5></li>
<p>Some of these challenges will entail increased cyber security concerns. The highly interconnected digital world will greatly enhance the threats of cyber-attacks and privacy concerns. 
Software Development companies that are the hubs of sensitive and expensive data will need to transform their cyber security fronts to tackle the emerging threats. This will call for new and more protected firewall systems and data protection software.
</p>
<h5><li>Competition</h5></li>
<p>With all these changes that will be widely adopted by the players of the industry, competition will be strict, and new innovative ways to differentiate will have to be created. Players that do not adapt to the changing trends will slowly be wiped out by stronger more adaptive competition. </p>
<h5><li>Remote working and layovers</h5></li>
<p>Because AI and machine learning operations will wipe out the need for certain human personnel, and new flexible arrangements due to the overlapping of international time zones owed to globalization will have to be arranged, remote modes of working will be highly adopted by firms. 
This may require many firms to change their infrastructure in terms of both human and hardware. 
</p>
<h5><li>Demand for Skill and Outsourcing</li></h5>
<p>This will result in the outcome of increasing technological needs. Highly skilled developers will be sought out making this profession one of the most lucrative ones in the world. 
Human capital will soon be highly coveted by competing firms and many firms will begin to outsource operations as a result of not being able to employ developers’ full time. 
Outsourcing to professional agencies will result in the emergence of more and more software development startups and new franchises as well. 
</p>
</ul>

</ol>
<hr>
<h3>Our Concluding Remarks</h3><br/>
<p>The tech landscape is always subject to change and is by far the world's most dynamic process, one that has shaped everything we do from everyday processes to production and business. 
So although it is quite easy to predict the future of the software development industry, there will always remain certain changes that will be unaccounted for, simply because some innovations are so novel, that they are unpredictable until they happen.
</p>

${
  /* eslint-disable */
//   `<ul>
// 	<li>Implements&nbsp;&nbsp;
// 		<a href=\"#" rel=\"noopener noreferrer\" target=\"_blank\">GitHub Flavored Markdown</a>
// 	</li>
// 	<li>Renders actual, \"native\" React DOM elements</li>
// 	<li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>
// 	<li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>
// </ul>
// `
``
}
${
// <hr>
// <h3>Ordered list</h3><br/>
// <ol>
// 	<li>Analysis</li>
// 	<li>Design</li>
// 	<li>Implementation</li>
// </ol>

// <hr>
// <h3>Blockquote</h3><br/>
// <blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>

// <hr>
// <h3>Block Code</h3><br/>
// ${
//   /* eslint-disable-next-line */
//   `<pre class=\"ql-syntax\" spellcheck=\"false\">cd project-folder\nnpm install\n</pre>`
// }

// <br/>
// <br/>

// ${
//   /* eslint-disable-next-line */
//   `<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-keyword\">var</span> React = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'react'</span>);\n<span class=\"hljs-keyword\">var</span> Markdown = <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'react-markdown'</span>);\n\nReact.render(\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Markdown1</span> <span class=\"hljs-attr\">source</span>=<span class=\"hljs-string\">\"# Your markdown here\"</span> /&gt;</span>,\n  <span class=\"hljs-built_in\">document</span>.getElementById(<span class=\"hljs-string\">'content'</span>)\n);\n</pre>`
// }

// <br/>
// <br/>

// ${
//   /* eslint-disable-next-line */
//   `<pre class=\"ql-syntax\" spellcheck=\"false\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">createStyleObject</span>(<span class=\"hljs-params\">classNames, style</span>) </span>{\n  <span class=\"hljs-keyword\">return</span> classNames.reduce(<span class=\"hljs-function\">(<span class=\"hljs-params\">styleObject, className</span>) =&gt;</span> {\n   <span class=\"hljs-keyword\">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>`
// }

// <br/>
// <br/>

// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

// <br/>
// <br/>

// <p>
// <img src='https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg'/>
// </p>


// <br/>
// <br/>

// <p>
// It is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.
// </p>

// <br/>
// <br/>

// <p>
// <img src='https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg'/>
// </p>
``
}

`;

export const users = [...Array(12)].map((_, index) => {
  return {
    id: mockData.id(index),
    name: mockData.name.fullName(index),
    avatarUrl: mockData.image.avatar(index)
  };
});

const POST_COMMENTS = [
  {
    id: uuidv4(),
    name: users[0].name,
    avatarUrl: users[0].avatarUrl,
    message: mockData.text.sentence(1),
    postedAt: mockData.time(1),
    users: [users[0], users[1], users[2]],
    replyComment: [
      {
        id: uuidv4(),
        userId: users[1].id,
        message: mockData.text.sentence(2),
        postedAt: mockData.time(2)
      },
      {
        id: uuidv4(),
        userId: users[0].id,
        message: mockData.text.sentence(3),
        tagUser: users[1].name,
        postedAt: mockData.time(3)
      },
      {
        id: uuidv4(),
        userId: users[2].id,
        message: mockData.text.sentence(4),
        postedAt: mockData.time(4)
      }
    ]
  },
  {
    id: uuidv4(),
    name: users[4].name,
    avatarUrl: users[4].avatarUrl,
    message: mockData.text.sentence(5),
    postedAt: mockData.time(5),
    users: [users[5], users[6], users[7]],
    replyComment: [
      {
        id: uuidv4(),
        userId: users[5].id,
        message: mockData.text.sentence(6),
        postedAt: mockData.time(6)
      },
      {
        id: uuidv4(),
        userId: users[6].id,
        message: mockData.text.sentence(7),
        postedAt: mockData.time(7)
      },
      {
        id: uuidv4(),
        userId: users[7].id,
        message: mockData.text.sentence(8),
        postedAt: mockData.time(8)
      }
    ]
  },
  {
    id: uuidv4(),
    name: users[8].name,
    avatarUrl: users[8].avatarUrl,
    message: mockData.text.sentence(9),
    postedAt: mockData.time(9),
    users: [],
    replyComment: []
  },
  {
    id: uuidv4(),
    name: users[9].name,
    avatarUrl: users[9].avatarUrl,
    message: mockData.text.sentence(10),
    postedAt: mockData.time(10),
    users: [],
    replyComment: []
  }
];

export const posts = [...Array(15)].map((_, index) => {
  return {
    id: mockData.id(index),
    cover: mockData.image.cover(index),
    title: mockData.text.title(index),
    description: mockData.text.sentence(index),
    createdAt: mockData.time(index),
    view: random(9999),
    comment: random(9999),
    share: random(9999),
    favorite: random(9999),
    author: {
      // mockData.name.fullName(index)
      name: "Inshirah Akmal",
      // mockData.image.avatar(index)
      avatarUrl: "/static/mock-images/avatars/avatar_4.jpg"
    },
    // tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival']POST_BODY,
    // body: mockData.postBody.growBuissness,
    body : mockData.postBody(index),
    favoritePerson: [...Array(3)].map((_, index) => {
      return {
        name: mockData.name.fullName(index),
        avatarUrl: mockData.image.avatar(index)
      };
    }),
    comments: POST_COMMENTS
  };
});



// ----------------------------------------------------------------------

mock.onGet('/api/blog/posts/all').reply(200, { posts });

// ----------------------------------------------------------------------

mock.onGet('/api/blog/posts').reply((config) => {
  try {
    const { index, step } = config.params;
    
    const maxLength = posts.length;
    const loadMore = index + step;
    const sortPosts = [...posts].sort((a, b) => {
      
      return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf();
      
    });

    const results = sortPosts.slice(0, loadMore);

    return [200, { results, maxLength }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/blog/post').reply((config) => {
  try {
    const { title } = config.params;
    const post = posts.find((_post) => paramCase(_post.title) === title);

    if (!post) {
      return [404, { message: 'Post not found' }];
    }

    return [200, { post }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/blog/posts/recent').reply((config) => {
  try {
    const { title } = config.params;

    const recentPosts = posts
      .filter((_post) => paramCase(_post.title) !== title)
      .slice(posts.length - 5, posts.length);

    if (!recentPosts) {
      return [404, { message: 'Post not found' }];
    }

    return [200, { recentPosts }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

// ----------------------------------------------------------------------

mock.onGet('/api/blog/posts/search').reply((config) => {
  try {
    const { query } = config.params;
    const cleanQuery = query.toLowerCase().trim();
    const results: Post[] = [];

    posts.forEach((post) => {
      if (!query) {
        return results.push(post);
      }

      if (post.title.toLowerCase().includes(cleanQuery)) {
        return results.push(post);
      }
    });

    return [200, { results }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});
